// https://registry.terraform.io/providers/hashicorp/hcp/0.81.0/docs/resources/log_streaming_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogStreamingDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The HCP Log Streaming Destination’s name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.81.0/docs/resources/log_streaming_destination#name LogStreamingDestination#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.81.0/docs/resources/log_streaming_destination#splunk_cloud LogStreamingDestination#splunk_cloud}
  */
  readonly splunkCloud: LogStreamingDestinationSplunkCloud;
}
export interface LogStreamingDestinationSplunkCloud {
  /**
  * The Splunk Cloud endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.81.0/docs/resources/log_streaming_destination#endpoint LogStreamingDestination#endpoint}
  */
  readonly endpoint: string;
  /**
  * The authentication token that will be used by the platform to access Splunk Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.81.0/docs/resources/log_streaming_destination#token LogStreamingDestination#token}
  */
  readonly token: string;
}

export function logStreamingDestinationSplunkCloudToTerraform(struct?: LogStreamingDestinationSplunkCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function logStreamingDestinationSplunkCloudToHclTerraform(struct?: LogStreamingDestinationSplunkCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamingDestinationSplunkCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStreamingDestinationSplunkCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamingDestinationSplunkCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._token = value.token;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.81.0/docs/resources/log_streaming_destination hcp_log_streaming_destination}
*/
export class LogStreamingDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_log_streaming_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogStreamingDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogStreamingDestination to import
  * @param importFromId The id of the existing LogStreamingDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.81.0/docs/resources/log_streaming_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogStreamingDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_log_streaming_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.81.0/docs/resources/log_streaming_destination hcp_log_streaming_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogStreamingDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: LogStreamingDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_log_streaming_destination',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.81.0',
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
    this._name = config.name;
    this._splunkCloud.internalValue = config.splunkCloud;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // splunk_cloud - computed: false, optional: false, required: true
  private _splunkCloud = new LogStreamingDestinationSplunkCloudOutputReference(this, "splunk_cloud");
  public get splunkCloud() {
    return this._splunkCloud;
  }
  public putSplunkCloud(value: LogStreamingDestinationSplunkCloud) {
    this._splunkCloud.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkCloudInput() {
    return this._splunkCloud.internalValue;
  }

  // streaming_destination_id - computed: true, optional: false, required: false
  public get streamingDestinationId() {
    return this.getStringAttribute('streaming_destination_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      splunk_cloud: logStreamingDestinationSplunkCloudToTerraform(this._splunkCloud.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splunk_cloud: {
        value: logStreamingDestinationSplunkCloudToHclTerraform(this._splunkCloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStreamingDestinationSplunkCloud",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
