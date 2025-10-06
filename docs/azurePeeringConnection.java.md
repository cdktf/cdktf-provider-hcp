# `azurePeeringConnection` Submodule <a name="`azurePeeringConnection` Submodule" id="@cdktf/provider-hcp.azurePeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurePeeringConnection <a name="AzurePeeringConnection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection hcp_azure_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.azure_peering_connection.AzurePeeringConnection;

AzurePeeringConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hvnLink(java.lang.String)
    .peeringId(java.lang.String)
    .peerResourceGroupName(java.lang.String)
    .peerSubscriptionId(java.lang.String)
    .peerTenantId(java.lang.String)
    .peerVnetName(java.lang.String)
    .peerVnetRegion(java.lang.String)
//  .allowForwardedTraffic(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .timeouts(AzurePeeringConnectionTimeouts)
//  .useRemoteGateways(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.hvnLink">hvnLink</a></code> | <code>java.lang.String</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peeringId">peeringId</a></code> | <code>java.lang.String</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerResourceGroupName">peerResourceGroupName</a></code> | <code>java.lang.String</code> | The resource group name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerSubscriptionId">peerSubscriptionId</a></code> | <code>java.lang.String</code> | The subscription ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerTenantId">peerTenantId</a></code> | <code>java.lang.String</code> | The tenant ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerVnetName">peerVnetName</a></code> | <code>java.lang.String</code> | The name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerVnetRegion">peerVnetRegion</a></code> | <code>java.lang.String</code> | The region of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the forwarded traffic originating from the peered VNet is allowed in the HVN. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.useRemoteGateways">useRemoteGateways</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If the HVN should use the gateway of the peered VNet. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hvnLink`<sup>Required</sup> <a name="hvnLink" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.hvnLink"></a>

- *Type:* java.lang.String

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#hvn_link AzurePeeringConnection#hvn_link}

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peeringId"></a>

- *Type:* java.lang.String

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peering_id AzurePeeringConnection#peering_id}

---

##### `peerResourceGroupName`<sup>Required</sup> <a name="peerResourceGroupName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerResourceGroupName"></a>

- *Type:* java.lang.String

The resource group name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_resource_group_name AzurePeeringConnection#peer_resource_group_name}

---

##### `peerSubscriptionId`<sup>Required</sup> <a name="peerSubscriptionId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerSubscriptionId"></a>

- *Type:* java.lang.String

The subscription ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_subscription_id AzurePeeringConnection#peer_subscription_id}

---

##### `peerTenantId`<sup>Required</sup> <a name="peerTenantId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerTenantId"></a>

- *Type:* java.lang.String

The tenant ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_tenant_id AzurePeeringConnection#peer_tenant_id}

---

##### `peerVnetName`<sup>Required</sup> <a name="peerVnetName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerVnetName"></a>

- *Type:* java.lang.String

The name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_vnet_name AzurePeeringConnection#peer_vnet_name}

---

##### `peerVnetRegion`<sup>Required</sup> <a name="peerVnetRegion" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerVnetRegion"></a>

- *Type:* java.lang.String

The region of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_vnet_region AzurePeeringConnection#peer_vnet_region}

---

##### `allowForwardedTraffic`<sup>Optional</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.allowForwardedTraffic"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the forwarded traffic originating from the peered VNet is allowed in the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#allow_forwarded_traffic AzurePeeringConnection#allow_forwarded_traffic}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#timeouts AzurePeeringConnection#timeouts}

---

##### `useRemoteGateways`<sup>Optional</sup> <a name="useRemoteGateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.useRemoteGateways"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If the HVN should use the gateway of the peered VNet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#use_remote_gateways AzurePeeringConnection#use_remote_gateways}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetAllowForwardedTraffic">resetAllowForwardedTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetUseRemoteGateways">resetUseRemoteGateways</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts"></a>

```java
public void putTimeouts(AzurePeeringConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

---

##### `resetAllowForwardedTraffic` <a name="resetAllowForwardedTraffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetAllowForwardedTraffic"></a>

```java
public void resetAllowForwardedTraffic()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseRemoteGateways` <a name="resetUseRemoteGateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetUseRemoteGateways"></a>

```java
public void resetUseRemoteGateways()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzurePeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.azure_peering_connection.AzurePeeringConnection;

AzurePeeringConnection.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.azure_peering_connection.AzurePeeringConnection;

AzurePeeringConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.azure_peering_connection.AzurePeeringConnection;

AzurePeeringConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.azure_peering_connection.AzurePeeringConnection;

AzurePeeringConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzurePeeringConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AzurePeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzurePeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzurePeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AzurePeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.azurePeeringId">azurePeeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference">AzurePeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTrafficInput">allowForwardedTrafficInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLinkInput">hvnLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringIdInput">peeringIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupNameInput">peerResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionIdInput">peerSubscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantIdInput">peerTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetNameInput">peerVnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegionInput">peerVnetRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGatewaysInput">useRemoteGatewaysInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLink">hvnLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringId">peeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupName">peerResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionId">peerSubscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantId">peerTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetName">peerVnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegion">peerVnetRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGateways">useRemoteGateways</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `azurePeeringId`<sup>Required</sup> <a name="azurePeeringId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.azurePeeringId"></a>

```java
public java.lang.String getAzurePeeringId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeouts"></a>

```java
public AzurePeeringConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference">AzurePeeringConnectionTimeoutsOutputReference</a>

---

##### `allowForwardedTrafficInput`<sup>Optional</sup> <a name="allowForwardedTrafficInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTrafficInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowForwardedTrafficInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hvnLinkInput`<sup>Optional</sup> <a name="hvnLinkInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLinkInput"></a>

```java
public java.lang.String getHvnLinkInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `peeringIdInput`<sup>Optional</sup> <a name="peeringIdInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringIdInput"></a>

```java
public java.lang.String getPeeringIdInput();
```

- *Type:* java.lang.String

---

##### `peerResourceGroupNameInput`<sup>Optional</sup> <a name="peerResourceGroupNameInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupNameInput"></a>

```java
public java.lang.String getPeerResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `peerSubscriptionIdInput`<sup>Optional</sup> <a name="peerSubscriptionIdInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionIdInput"></a>

```java
public java.lang.String getPeerSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `peerTenantIdInput`<sup>Optional</sup> <a name="peerTenantIdInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantIdInput"></a>

```java
public java.lang.String getPeerTenantIdInput();
```

- *Type:* java.lang.String

---

##### `peerVnetNameInput`<sup>Optional</sup> <a name="peerVnetNameInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetNameInput"></a>

```java
public java.lang.String getPeerVnetNameInput();
```

- *Type:* java.lang.String

---

##### `peerVnetRegionInput`<sup>Optional</sup> <a name="peerVnetRegionInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegionInput"></a>

```java
public java.lang.String getPeerVnetRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeoutsInput"></a>

```java
public IResolvable|AzurePeeringConnectionTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

---

##### `useRemoteGatewaysInput`<sup>Optional</sup> <a name="useRemoteGatewaysInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGatewaysInput"></a>

```java
public java.lang.Boolean|IResolvable getUseRemoteGatewaysInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowForwardedTraffic`<sup>Required</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTraffic"></a>

```java
public java.lang.Boolean|IResolvable getAllowForwardedTraffic();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hvnLink`<sup>Required</sup> <a name="hvnLink" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLink"></a>

```java
public java.lang.String getHvnLink();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringId"></a>

```java
public java.lang.String getPeeringId();
```

- *Type:* java.lang.String

---

##### `peerResourceGroupName`<sup>Required</sup> <a name="peerResourceGroupName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupName"></a>

```java
public java.lang.String getPeerResourceGroupName();
```

- *Type:* java.lang.String

---

##### `peerSubscriptionId`<sup>Required</sup> <a name="peerSubscriptionId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionId"></a>

```java
public java.lang.String getPeerSubscriptionId();
```

- *Type:* java.lang.String

---

##### `peerTenantId`<sup>Required</sup> <a name="peerTenantId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantId"></a>

```java
public java.lang.String getPeerTenantId();
```

- *Type:* java.lang.String

---

##### `peerVnetName`<sup>Required</sup> <a name="peerVnetName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetName"></a>

```java
public java.lang.String getPeerVnetName();
```

- *Type:* java.lang.String

---

##### `peerVnetRegion`<sup>Required</sup> <a name="peerVnetRegion" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegion"></a>

```java
public java.lang.String getPeerVnetRegion();
```

- *Type:* java.lang.String

---

##### `useRemoteGateways`<sup>Required</sup> <a name="useRemoteGateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGateways"></a>

```java
public java.lang.Boolean|IResolvable getUseRemoteGateways();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzurePeeringConnectionConfig <a name="AzurePeeringConnectionConfig" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.azure_peering_connection.AzurePeeringConnectionConfig;

AzurePeeringConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hvnLink(java.lang.String)
    .peeringId(java.lang.String)
    .peerResourceGroupName(java.lang.String)
    .peerSubscriptionId(java.lang.String)
    .peerTenantId(java.lang.String)
    .peerVnetName(java.lang.String)
    .peerVnetRegion(java.lang.String)
//  .allowForwardedTraffic(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .timeouts(AzurePeeringConnectionTimeouts)
//  .useRemoteGateways(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.hvnLink">hvnLink</a></code> | <code>java.lang.String</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peeringId">peeringId</a></code> | <code>java.lang.String</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerResourceGroupName">peerResourceGroupName</a></code> | <code>java.lang.String</code> | The resource group name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerSubscriptionId">peerSubscriptionId</a></code> | <code>java.lang.String</code> | The subscription ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerTenantId">peerTenantId</a></code> | <code>java.lang.String</code> | The tenant ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetName">peerVnetName</a></code> | <code>java.lang.String</code> | The name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetRegion">peerVnetRegion</a></code> | <code>java.lang.String</code> | The region of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the forwarded traffic originating from the peered VNet is allowed in the HVN. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.useRemoteGateways">useRemoteGateways</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If the HVN should use the gateway of the peered VNet. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hvnLink`<sup>Required</sup> <a name="hvnLink" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.hvnLink"></a>

```java
public java.lang.String getHvnLink();
```

- *Type:* java.lang.String

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#hvn_link AzurePeeringConnection#hvn_link}

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peeringId"></a>

```java
public java.lang.String getPeeringId();
```

- *Type:* java.lang.String

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peering_id AzurePeeringConnection#peering_id}

---

##### `peerResourceGroupName`<sup>Required</sup> <a name="peerResourceGroupName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerResourceGroupName"></a>

```java
public java.lang.String getPeerResourceGroupName();
```

- *Type:* java.lang.String

The resource group name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_resource_group_name AzurePeeringConnection#peer_resource_group_name}

---

##### `peerSubscriptionId`<sup>Required</sup> <a name="peerSubscriptionId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerSubscriptionId"></a>

```java
public java.lang.String getPeerSubscriptionId();
```

- *Type:* java.lang.String

The subscription ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_subscription_id AzurePeeringConnection#peer_subscription_id}

---

##### `peerTenantId`<sup>Required</sup> <a name="peerTenantId" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerTenantId"></a>

```java
public java.lang.String getPeerTenantId();
```

- *Type:* java.lang.String

The tenant ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_tenant_id AzurePeeringConnection#peer_tenant_id}

---

##### `peerVnetName`<sup>Required</sup> <a name="peerVnetName" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetName"></a>

```java
public java.lang.String getPeerVnetName();
```

- *Type:* java.lang.String

The name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_vnet_name AzurePeeringConnection#peer_vnet_name}

---

##### `peerVnetRegion`<sup>Required</sup> <a name="peerVnetRegion" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetRegion"></a>

```java
public java.lang.String getPeerVnetRegion();
```

- *Type:* java.lang.String

The region of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#peer_vnet_region AzurePeeringConnection#peer_vnet_region}

---

##### `allowForwardedTraffic`<sup>Optional</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.allowForwardedTraffic"></a>

```java
public java.lang.Boolean|IResolvable getAllowForwardedTraffic();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the forwarded traffic originating from the peered VNet is allowed in the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#allow_forwarded_traffic AzurePeeringConnection#allow_forwarded_traffic}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.timeouts"></a>

```java
public AzurePeeringConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#timeouts AzurePeeringConnection#timeouts}

---

##### `useRemoteGateways`<sup>Optional</sup> <a name="useRemoteGateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.useRemoteGateways"></a>

```java
public java.lang.Boolean|IResolvable getUseRemoteGateways();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If the HVN should use the gateway of the peered VNet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#use_remote_gateways AzurePeeringConnection#use_remote_gateways}

---

### AzurePeeringConnectionTimeouts <a name="AzurePeeringConnectionTimeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.azure_peering_connection.AzurePeeringConnectionTimeouts;

AzurePeeringConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#create AzurePeeringConnection#create}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#default AzurePeeringConnection#default}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#delete AzurePeeringConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#create AzurePeeringConnection#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#default AzurePeeringConnection#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/azure_peering_connection#delete AzurePeeringConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AzurePeeringConnectionTimeoutsOutputReference <a name="AzurePeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.azure_peering_connection.AzurePeeringConnectionTimeoutsOutputReference;

new AzurePeeringConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AzurePeeringConnectionTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

---



