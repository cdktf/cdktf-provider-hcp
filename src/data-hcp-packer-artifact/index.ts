// https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpPackerArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the HCP Packer Bucket where the Artifact is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact#bucket_name DataHcpPackerArtifact#bucket_name}
  */
  readonly bucketName: string;
  /**
  * 
  * The name of the HCP Packer Channel the Version containing this Artifact is assigned to.
  * The Version currently assigned to the Channel will be fetched. 
  * Exactly one of `channel_name` or `version_fingerprint` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact#channel_name DataHcpPackerArtifact#channel_name}
  */
  readonly channelName?: string;
  /**
  * Name of the Packer builder that built this Artifact. Ex: `amazon-ebs.example`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact#component_type DataHcpPackerArtifact#component_type}
  */
  readonly componentType?: string;
  /**
  * Name of the platform where the HCP Packer Artifact is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact#platform DataHcpPackerArtifact#platform}
  */
  readonly platform: string;
  /**
  * The ID of the HCP Organization where the Artifact is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact#project_id DataHcpPackerArtifact#project_id}
  */
  readonly projectId?: string;
  /**
  * The Region where the HCP Packer Artifact is stored, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact#region DataHcpPackerArtifact#region}
  */
  readonly region: string;
  /**
  * 
  * The fingerprint of the HCP Packer Version where the Artifact is located. 
  * If provided in the config, it is used to fetch the Version.
  * Exactly one of `channel_name` or `version_fingerprint` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact#version_fingerprint DataHcpPackerArtifact#version_fingerprint}
  */
  readonly versionFingerprint?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact hcp_packer_artifact}
*/
export class DataHcpPackerArtifact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_packer_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpPackerArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpPackerArtifact to import
  * @param importFromId The id of the existing DataHcpPackerArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpPackerArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_packer_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/data-sources/packer_artifact hcp_packer_artifact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpPackerArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpPackerArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_packer_artifact',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.101.0',
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
    this._channelName = config.channelName;
    this._componentType = config.componentType;
    this._platform = config.platform;
    this._projectId = config.projectId;
    this._region = config.region;
    this._versionFingerprint = config.versionFingerprint;
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

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
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

  // external_identifier - computed: true, optional: false, required: false
  public get externalIdentifier() {
    return this.getStringAttribute('external_identifier');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
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

  // version_fingerprint - computed: true, optional: true, required: false
  private _versionFingerprint?: string; 
  public get versionFingerprint() {
    return this.getStringAttribute('version_fingerprint');
  }
  public set versionFingerprint(value: string) {
    this._versionFingerprint = value;
  }
  public resetVersionFingerprint() {
    this._versionFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionFingerprintInput() {
    return this._versionFingerprint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      channel_name: cdktf.stringToTerraform(this._channelName),
      component_type: cdktf.stringToTerraform(this._componentType),
      platform: cdktf.stringToTerraform(this._platform),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      version_fingerprint: cdktf.stringToTerraform(this._versionFingerprint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_name: {
        value: cdktf.stringToHclTerraform(this._channelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_type: {
        value: cdktf.stringToHclTerraform(this._componentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_fingerprint: {
        value: cdktf.stringToHclTerraform(this._versionFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
