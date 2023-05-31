// https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpPackerImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The slug of the HCP Packer Registry image bucket to pull from.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#bucket_name DataHcpPackerImage#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The channel that points to the version of the image being retrieved. Either this or `iteration_id` must be specified. Note: will incur a billable request
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#channel DataHcpPackerImage#channel}
  */
  readonly channel?: string;
  /**
  * Name of the cloud provider this image is stored-in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#cloud_provider DataHcpPackerImage#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Name of the builder that built this image. Ex: `amazon-ebs.example`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#component_type DataHcpPackerImage#component_type}
  */
  readonly componentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#id DataHcpPackerImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The iteration from which to get the image. Either this or `channel` must be specified.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#iteration_id DataHcpPackerImage#iteration_id}
  */
  readonly iterationId?: string;
  /**
  * The ID of the HCP project where the HCP Packer Registry image is located.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#project_id DataHcpPackerImage#project_id}
  */
  readonly projectId?: string;
  /**
  * Region this image is stored in, if any.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#region DataHcpPackerImage#region}
  */
  readonly region: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#timeouts DataHcpPackerImage#timeouts}
  */
  readonly timeouts?: DataHcpPackerImageTimeouts;
}
export interface DataHcpPackerImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image#default DataHcpPackerImage#default}
  */
  readonly default?: string;
}

export function dataHcpPackerImageTimeoutsToTerraform(struct?: DataHcpPackerImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class DataHcpPackerImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcpPackerImageTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpPackerImageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image hcp_packer_image}
*/
export class DataHcpPackerImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_packer_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/packer_image hcp_packer_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpPackerImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpPackerImageConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_packer_image',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.58.0',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._channel = config.channel;
    this._cloudProvider = config.cloudProvider;
    this._componentType = config.componentType;
    this._id = config.id;
    this._iterationId = config.iterationId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // build_id - computed: true, optional: false, required: false
  public get buildId() {
    return this.getStringAttribute('build_id');
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // cloud_image_id - computed: true, optional: false, required: false
  public get cloudImageId() {
    return this.getStringAttribute('cloud_image_id');
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // component_type - computed: true, optional: true, required: false
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  public resetComponentType() {
    this._componentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // iteration_id - computed: true, optional: true, required: false
  private _iterationId?: string; 
  public get iterationId() {
    return this.getStringAttribute('iteration_id');
  }
  public set iterationId(value: string) {
    this._iterationId = value;
  }
  public resetIterationId() {
    this._iterationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationIdInput() {
    return this._iterationId;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // packer_run_uuid - computed: true, optional: false, required: false
  public get packerRunUuid() {
    return this.getStringAttribute('packer_run_uuid');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // revoke_at - computed: true, optional: false, required: false
  public get revokeAt() {
    return this.getStringAttribute('revoke_at');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHcpPackerImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpPackerImageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      channel: cdktf.stringToTerraform(this._channel),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      component_type: cdktf.stringToTerraform(this._componentType),
      id: cdktf.stringToTerraform(this._id),
      iteration_id: cdktf.stringToTerraform(this._iterationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      timeouts: dataHcpPackerImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
