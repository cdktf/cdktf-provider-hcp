// https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTransitGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HashiCorp Virtual Network (HVN).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#hvn_id AwsTransitGatewayAttachment#hvn_id}
  */
  readonly hvnId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#id AwsTransitGatewayAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Amazon Resource Name (ARN) of the Resource Share that is needed to grant HCP access to the transit gateway in AWS. The Resource Share should be associated with the HCP AWS account principal (see [aws_ram_principal_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_principal_association)) and the transit gateway resource (see [aws_ram_resource_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ram_resource_association))
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#resource_share_arn AwsTransitGatewayAttachment#resource_share_arn}
  */
  readonly resourceShareArn: string;
  /**
  * The user-settable name of the transit gateway attachment in HCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#transit_gateway_attachment_id AwsTransitGatewayAttachment#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId: string;
  /**
  * The ID of the user-owned transit gateway in AWS. The AWS region of the transit gateway must match the HVN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#transit_gateway_id AwsTransitGatewayAttachment#transit_gateway_id}
  */
  readonly transitGatewayId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#timeouts AwsTransitGatewayAttachment#timeouts}
  */
  readonly timeouts?: AwsTransitGatewayAttachmentTimeouts;
}
export interface AwsTransitGatewayAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#create AwsTransitGatewayAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#default AwsTransitGatewayAttachment#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment#delete AwsTransitGatewayAttachment#delete}
  */
  readonly delete?: string;
}

export function awsTransitGatewayAttachmentTimeoutsToTerraform(struct?: AwsTransitGatewayAttachmentTimeoutsOutputReference | AwsTransitGatewayAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class AwsTransitGatewayAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTransitGatewayAttachmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTransitGatewayAttachmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment hcp_aws_transit_gateway_attachment}
*/
export class AwsTransitGatewayAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_aws_transit_gateway_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/hcp/r/aws_transit_gateway_attachment hcp_aws_transit_gateway_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTransitGatewayAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTransitGatewayAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_aws_transit_gateway_attachment',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.52.0',
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
    this._hvnId = config.hvnId;
    this._id = config.id;
    this._resourceShareArn = config.resourceShareArn;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayId = config.transitGatewayId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // hvn_id - computed: false, optional: false, required: true
  private _hvnId?: string; 
  public get hvnId() {
    return this.getStringAttribute('hvn_id');
  }
  public set hvnId(value: string) {
    this._hvnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hvnIdInput() {
    return this._hvnId;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // provider_transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get providerTransitGatewayAttachmentId() {
    return this.getStringAttribute('provider_transit_gateway_attachment_id');
  }

  // resource_share_arn - computed: false, optional: false, required: true
  private _resourceShareArn?: string; 
  public get resourceShareArn() {
    return this.getStringAttribute('resource_share_arn');
  }
  public set resourceShareArn(value: string) {
    this._resourceShareArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceShareArnInput() {
    return this._resourceShareArn;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId?: string; 
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsTransitGatewayAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsTransitGatewayAttachmentTimeouts) {
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
      hvn_id: cdktf.stringToTerraform(this._hvnId),
      id: cdktf.stringToTerraform(this._id),
      resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      timeouts: awsTransitGatewayAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
